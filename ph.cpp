#include <Arduino.h>

// Define sensor pins
const int soilMoisturePin = A0;  // Soil moisture sensor pin
const int phPin = A1;  // pH sensor pin
const int npkPin = A2;  // NPK sensor pin

void setup() {
  Serial.begin(9600);
}

void loop() {
  int soilMoistureValue = analogRead(soilMoisturePin);
  int phValue = analogRead(phPin);
  int npkValue = analogRead(npkPin);

  // Convert sensor values to meaningful data
  float soilMoisturePercentage = map(soilMoistureValue, 0, 1023, 0, 100);
  float phLevel = map(phValue, 0, 1023, 0, 14);
  float npkLevel = map(npkValue, 0, 1023, 0, 100);

  // Print sensor data to serial monitor
  Serial.print("Soil Moisture: ");
  Serial.print(soilMoisturePercentage);
  Serial.println("%");
  Serial.print("pH Level: ");
  Serial.print(phLevel);
  Serial.println();
  Serial.print("NPK Level: ");
  Serial.print(npkLevel);
  Serial.println("%");

  delay(1000);
}
