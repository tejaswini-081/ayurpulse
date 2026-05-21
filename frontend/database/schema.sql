CREATE TABLE Patient (
    patient_id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10)
);

CREATE TABLE SensorData (
    sensor_id INT PRIMARY KEY,
    pulse FLOAT,
    temperature FLOAT
);
