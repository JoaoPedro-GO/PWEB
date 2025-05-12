function abrirCurso() {
    const cursoSelecionado = document.getElementById('cursoSelect').value;

   
    const cursos = {
        "Análise e Desenvolvimento de Sistemas": "Curso focado no desenvolvimento de sistemas e aplicações, abordando linguagens de programação, banco de dados, análise e modelagem de sistemas.",
        "Eletrônica Automotiva": "Curso que prepara o profissional para atuar na manutenção e desenvolvimento de sistemas eletrônicos aplicados aos veículos automotores.",
        "Fabricação Mecânica": "Curso voltado para a formação de profissionais capacitados a atuar na produção e fabricação de peças e componentes mecânicos.",
        "Gestão da Qualidade": "Curso focado em técnicas de gestão da qualidade, controle de processos e otimização das operações em diversas áreas da indústria.",
        "Manufatura Avançada": "Curso que aborda tecnologias avançadas de fabricação, como automação, impressão 3D e técnicas de produção eficiente.",
        "Manutenção de Aeronaves": "Curso destinado à formação de profissionais para manutenção, reparo e inspeção de aeronaves, garantindo a segurança e a operação eficiente dos veículos aéreos.",
        "Processos Metalúrgicos": "Curso que aborda processos de fabricação e tratamento de metais, como fundição, forjamento e soldagem.",
        "Sistemas Biomédicos": "Curso que forma profissionais capazes de desenvolver e manter sistemas tecnológicos aplicados à área da saúde, como equipamentos médicos e sistemas de informação hospitalar."
    };

    if (cursoSelecionado) {
        const confirmacao = confirm(`Você deseja abrir o curso de ${cursoSelecionado}?`);
        if (confirmacao) {
            
            const janela = window.open('', cursoSelecionado, 'width=600,height=400');
            
            
            janela.document.title = `Curso de ${cursoSelecionado}`;

            
            const descricaoCurso = cursos[cursoSelecionado];

            
            janela.document.write(`
                <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                padding: 20px;
                                background-color: #f4f4f4;
                            }
                            h1 {
                                color: #333;
                                font-size: 24px;
                            }
                            p {
                                font-size: 16px;
                                color: #555;
                            }
                        </style>
                    </head>
                    <body>
                        <h1>${cursoSelecionado}</h1>
                        <p>${descricaoCurso}</p>
                    </body>
                </html>
            `);
        }
    } else {
        alert("Por favor, selecione um curso.");
    }
}
