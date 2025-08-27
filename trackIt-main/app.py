from flask import Flask, render_template, request, redirect, url_for, session
import mysql.connector

app = Flask(__name__)
app.secret_key = "your_secret_key"

# ---------- Database Connection ----------
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Guv4jq5@d",  
        database="student_db"
    )

# ---------- Routes ----------
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/student", methods=["GET", "POST"])
def student():
    if request.method == "POST":
        name = request.form.get("name")
        roll = request.form.get("roll")
        course = request.form.get("course")
        mobile = request.form.get("mobile")
        amount = request.form.get("amount")

      
        if not amount or amount.strip() == "":
            amount_value = 0
        else:
            amount_value = int(amount)

        # Database save
        conn = get_db_connection()
        cursor = conn.cursor()
        sql = """
            INSERT INTO students (name, roll, course, mobile, amount) 
            VALUES (%s, %s, %s, %s, %s)
        """
        val = (name, roll, course, mobile, amount_value)
        cursor.execute(sql, val)
        conn.commit()
        cursor.close()
        conn.close()

        return redirect(url_for("index"))

    return render_template("student.html")

@app.route("/teacher", methods=["GET", "POST"])
def teacher():
    error = None
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if username == "admin" and password == "1234":
            session["teacher_logged_in"] = True
            return redirect(url_for("student_details"))
        else:
            error = "Invalid ID or Password"

    return render_template("teacher.html", error=error)

@app.route("/student-details")
def student_details():
    if not session.get("teacher_logged_in"):
        return redirect(url_for("teacher"))

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    students = []
    for idx, row in enumerate(rows, start=1):
        students.append({
            "serial": idx,
            "name": row[1],
            "roll": row[2],
            "course": row[3],
            "mobile": row[4],
            "amount": "Not Entered" if row[5] == 0 else row[5],
            "timestamp": row[6]
        })

    return render_template("student_details.html", students=students)

@app.route("/logout")
def logout():
    session.pop("teacher_logged_in", None)
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
