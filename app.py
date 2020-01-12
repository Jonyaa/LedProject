from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html', title="First")

@app.route('/control')
def control():
   return render_template('control.html', title="Control")

@app.route('/upload', methods=['POST'])
def upload():
   if request.method == "POST":
      print(request.form['bookstands'])

   return redirect("/")