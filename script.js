document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todas as etapas do quiz
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const finalStep = document.getElementById('final-step');

    // Função genérica para ir para a próxima etapa
    function goToStep(currentStep, nextStep) {
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
    }

    // Adiciona os eventos de clique para os botões da ETAPA 1
    step1.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Aqui você poderia guardar a resposta do usuário se quisesse
            // Ex: const resposta1 = button.textContent;
            goToStep(step1, step2);
        });
    });

    // Adiciona os eventos de clique para os botões da ETAPA 2
    step2.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', () => {
            goToStep(step2, step3);
        });
    });

    // Adiciona os eventos de clique para os botões da ETAPA 3
    step3.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', () => {
            goToStep(step3, finalStep);
        });
    });

});