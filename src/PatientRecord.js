import java.util.ArrayList;
import java.util.List;

public class PatientRecord {
    private String name;
    private int age;
    private String gender;
    private List<String> medicalHistory;
    private List<String> currentMedications;
    private List<String> allergies;

    public PatientRecord(String name, int age, String gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.medicalHistory = new ArrayList<>();
        this.currentMedications = new ArrayList<>();
        this.allergies = new ArrayList<>();
    }

    public void addMedicalHistory(String history) {
        this.medicalHistory.add(history);
    }

    public void addCurrentMedication(String medication) {
        this.currentMedications.add(medication);
    }

    public void addAllergy(String allergy) {
        this.allergies.add(allergy);
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public List<String> getMedicalHistory() {
        return medicalHistory;
    }

    public List<String> getCurrentMedications() {
        return currentMedications;
    }

    public List<String> getAllergies() {
        return allergies;
    }
}