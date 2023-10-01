public class Prescription {
    private String medicationName;
    private String dosage;
    private String frequency;
    private String instructions;

    public Prescription(String medicationName, String dosage, String frequency, String instructions) {
        this.medicationName = medicationName;
        this.dosage = dosage;
        this.frequency = frequency;
        this.instructions = instructions;
    }

    public String getMedicationName() {
        return medicationName;
    }

    public String getDosage() {
        return dosage;
    }

    public String getFrequency() {
        return frequency;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setMedicationName(String medicationName) {
        this.medicationName = medicationName;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void verifyWithMedicalRecord(PatientRecord record) {
        // Verify that the prescription is safe for the patient based on their medical record
        // This method could check for drug interactions, allergies, or other potential issues
    }

    public String generateReport() {
        // Generate a report or summary of the prescription
        // This method could format the prescription information as a string or JSON object
        return "Prescription for " + medicationName + ":\n" +
                "Dosage: " + dosage + "\n" +
                "Frequency: " + frequency + "\n" +
                "Instructions: " + instructions;
    }
}