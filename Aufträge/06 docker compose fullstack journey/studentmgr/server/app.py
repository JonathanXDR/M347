from flask import Flask

# init Flask app instance
app = Flask(__name__)

# To set up the SQLite database, start by importing the following packages:
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Integer, Enum
from flask_marshmallow import Marshmallow
import os

# Then set up the base directory for the application
basedir = os.path.abspath(os.path.dirname(__file__))

# Add the database application configuration.
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir,'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Since we are using Flask-sqlalchemy and Flask-marshmallow, we can now set SQLAlchemy to initialize the database Marshmallow to initialize marshmallow as shown below.
db = SQLAlchemy(app)
ma = Marshmallow(app)

white = ['http://localhost:8080','http://localhost:9000','http://localhost:3000', 'http://localhost:5000']

class Student(db.Model):
    id = id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    age = db.Column(db.Integer)

    def __init__(self, name, age):
        # Add the data to the instance
        self.name = name
        self.age = age

class StudentDBSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'age')

student_schema = StudentDBSchema()
students_schema = StudentDBSchema(many=True)

# Set up the SQLite database and the tables
with app.app_context():
    db.create_all()

# To set up the routes, start by importing packages
from flask import Flask,request, jsonify
from flask_cors import CORS,cross_origin

# request will be used to get the payload (data sent), whereas jsonify will be used to return JSON data. CORS and cross_origin for setting up the access policy.

# Then add CORS configuration to handle cross-origins coming in to consume this API.
#CORS(app,resources={r"/api": {"origins": "*"}})
#app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

# Let us now add all the necessary routes to handle the CRUD operations.
@app.route('/api/student', methods=['POST'])
@cross_origin(origin='*',headers=['content-type'])
def add_student():
    # get the data
    name = request.json['name']
    age = request.json['age']
    # Create an instance
    new_student = Student(name, age)
    # Save the student in the db
    db.session.add(new_student)
    db.session.commit()
    # return the created todo
    return student_schema.jsonify(new_student)

# Get all students
@app.route('/api/student', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type'])
def get_students():
    # get the students from db
    all_students = Student.query.all()
    # get the students as per the schema
    result = students_schema.dump(all_students)
    # return the students
    return jsonify(result)

# Get a single student
@app.route('/api/student/<id>', methods=['GET'])
@cross_origin(origin='*',headers=['Content-Type'])
def get_student(id):
    # get a single student
    student = Student.query.get(id)
    # return the student as per the schema
    return student_schema.jsonify(student)

# update a student
@app.route('/api/student/<id>', methods=['PUT'])
@cross_origin(origin='*',headers=['Content-Type'])
def update_student(id):
    # get the student first
    student = Student.query.get(id)
    # get the data
    name = request.json['name']
    age = request.json['age']
    # set the data
    student.name = name
    student.age = age
    # commit to the database
    db.session.commit()
    # return the new todo as per the schema
    return student_schema.jsonify(student)

# Delete a student
@app.route('/api/student/<id>', methods=['DELETE'])
@cross_origin(origin='*',headers=['Content-Type'])
def delete_student(id):
    # get the student to be deleted
    student = Student.query.get(id)
    # delete from the database
    db.session.delete(student)
    # commit on the database
    db.session.commit()
    # return the deleted student as per the schema
    return student_schema.jsonify(student)

@app.route('/')
@cross_origin(origin='*',headers=['Content-Type'])
def main():
    return 'hi'

# run the app if executed as main file to python interpreter
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')