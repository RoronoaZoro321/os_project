document.getElementById('patientForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const patientId = document.getElementById('patientId').value;
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch(`/api/patients/${patientId}`);
        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `
                <h2>Patient Information</h2>
                <p><strong>ID:</strong> ${data.id}</p>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Age:</strong> ${data.age}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
            `;
        } else {
            resultDiv.innerHTML = `<h4>Error: ${data.message}</h4>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<h4>Error: Unable to fetch patient information</h4>`;
    }
});