import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('dailyForm');
  const modal = document.getElementById('modal');
  const closeModal = document.getElementById('closeModal');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const days = Array.from(document.getElementById('days').selectedOptions).map(option => option.value);
    const time = document.getElementById('time').value;
    const meetingCode = document.getElementById('meetingCode').value;

    if (days.length === 0) {
      alert('Por favor, selecciona al menos un día de la semana.');
      return;
    }

    // Aquí es donde normalmente enviarías los datos a tu API
    console.log('Datos de la automatización:', { days, time, meetingCode });

    // Mostrar la modal
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});