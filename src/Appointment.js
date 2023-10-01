import java.time.LocalDateTime;

public class Appointment {
    private LocalDateTime dateTime;
    private String providerName;
    private String reason;
    private String notes;

    public Appointment(LocalDateTime dateTime, String providerName, String reason) {
        this.dateTime = dateTime;
        this.providerName = providerName;
        this.reason = reason;
        this.notes = "";
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public String getProviderName() {
        return providerName;
    }

    public String getReason() {
        return reason;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public void reschedule(LocalDateTime newDateTime) {
        // Reschedule the appointment for a new date and time
        this.dateTime = newDateTime;
    }

    public void sendReminder() {
        // Send a reminder to the patient about the appointment
        // This method could use email, SMS, or other communication methods
    }

    public String generateReport() {
        // Generate a report or summary of the appointment
        // This method could format the appointment information as a string or JSON object
        return "Appointment with " + providerName + ":\n" +
            "Date and time: " + dateTime.toString() + "\n" +
            "Reason: " + reason + "\n" +
            "Notes: " + notes;
    }
}