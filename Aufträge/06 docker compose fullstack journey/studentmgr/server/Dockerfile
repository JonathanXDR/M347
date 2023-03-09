# Base python package
FROM python:3.10.10-slim-buster

# Working directory
WORKDIR /app

# Copy the dependencies
COPY requirements.txt requirements.txt

# Install the dependencies
RUN pip3 install -r requirements.txt

# COPY . .

# Executable commands
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]