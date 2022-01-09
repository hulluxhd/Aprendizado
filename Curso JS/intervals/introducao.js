// Para criar um intervalo, utiliza-se principalmente dois métodos, o setTimeout(fn, ms) e setInterval(fn, ms)

// setTimeout() | agenda uma função para ser executada uma única vez

// setInterval() | agenda uma função para ser executada a cada x milisec

// clearTimeout() e clearInterval() servem para interromper essas funções agendadas

// o Javascript é single-thread, o que significa que dois processos não podem correr concomitantemente. Portanto, se um timeout ou interval for agendado, e outro código mais 'custoso' estiver em execução, tais funções serão colocadas numa fila e executadas quando o código principal terminar seu processamento