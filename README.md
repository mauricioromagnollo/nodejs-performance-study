# nodejs-performance-study

- **Memory Leaks (Vazamento de Memória)** &rarr; São termos usados para identificar programas que tem dificuldades para descartar memórias, causando impacto de performance e podendo até derrubar uma aplicação. Definitivamente, a memória ficou "presa", ou seja, não foi desalocada ou realocada.

## Packages

- [climem](https://github.com/mcollina/climem) &rarr; Monitorar localmente o uso de memória;
- [autocannon](https://github.com/mcollina/autocannon) &rarr; Executar testes de carga;
- [0x](https://github.com/davidmarkclements/0x) &rarr; Auxilia para demonstrar exatamente qual a linha de código ficou mais tempo na stack; 
- [clinic](https://github.com/clinicjs/node-clinic) &rarr; Traz sugestões sobre o que pode ser feito no código para resolver o problema;

## Passo a Passo

- Análise estática de código
- Análise dinâmica de código
- Análise de conexões externas
- Documentação/Report
- Sugestões de melhoria e/ou implementação