document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const className = document.getElementById('class').value;
    const bio = document.getElementById('bio').value;
    const photo = document.getElementById('photo').files[0];

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayPhoto').src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }
    
    document.getElementById('displayName').innerText = 'Nome: ' + name;
    document.getElementById('displayAge').innerText = 'Idade: ' + age;
    document.getElementById('displayClass').innerText = 'Classe: ' + className;
    document.getElementById('displayBio').innerText = 'Biografia: ' + bio;
    
    const story = generateCharacterStory(name, age, className, bio);
    document.getElementById('characterStory').innerText = story;
    
    document.getElementById('profileDisplay').style.display = 'block';
});

document.getElementById('randomClassButton').addEventListener('click', function() {
    const classes = ['Guerreiro', 'Mago', 'Arqueiro', 'Ladino', 'Paladino', 'Bardo'];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    document.getElementById('class').value = randomClass;
});
//math.floor e class lenght 
//lenght = classes.length retorna 6, porque o array classes contém seis elementos: 'Guerreiro', 'Mago', 'Arqueiro', 'Ladino', 'Paladino' e 'Bardo'.
//math Math.floor então arredonda esse número para baixo (4.5) para o inteiro (4) mais próximo, resultando em um valor entre 0 e 5 (inclusive).
document.getElementById('randomBioButton').addEventListener('click', function() {
    const bios = [
        'um bravo aventureiro conhecido por sua coragem.',
        'um mestre das artes mágicas com um conhecimento vasto.',
        'um habilidoso arqueiro, sempre certeiro com seu arco.',
        'um ladino astuto, sempre um passo à frente dos seus inimigos.',
        'um paladino devoto, lutando pela justiça e pelo bem.',
        'um bardo encantador, capaz de conquistar qualquer audiência com sua música.'
    ];
    const randomBio = bios[Math.floor(Math.random() * bios.length)];
    document.getElementById('bio').value = randomBio;
});

document.getElementById('randomStoryButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const className = document.getElementById('class').value;
    const bio = document.getElementById('bio').value;

    const story = generateCharacterStory(name, age, className, bio);
    document.getElementById('characterStory').innerText = story;
});

function generateCharacterStory(name, age, className, bio) {
    const stats = {
        forca: Math.floor(Math.random() * 100) + 1,
        defesa: Math.floor(Math.random() * 100) + 1,
        inteligencia: Math.floor(Math.random() * 100) + 1,
        vigor: Math.floor(Math.random() * 100) + 1,
        sorte: Math.floor(Math.random() * 100) + 1,
        fe: Math.floor(Math.random() * 100) + 1
    };

    document.getElementById('displayForca').innerText = 'Força: ' + stats.forca;
    document.getElementById('displayDefesa').innerText = 'Defesa: ' + stats.defesa;
    document.getElementById('displayInteligencia').innerText = 'Inteligência: ' + stats.inteligencia;
    document.getElementById('displayVigor').innerText = 'Vigor: ' + stats.vigor;
    document.getElementById('displaySorte').innerText = 'Sorte: ' + stats.sorte;
    document.getElementById('displayFe').innerText = 'Fé: ' + stats.fe;

    const stories = [
        `Era uma vez ${name}, um jovem de ${age} anos que pertencia à classe ${className}. ${bio} Um dia, ele encontrou um misterioso mapa do tesouro que o levou a uma aventura incrível. No final, ${name} descobriu um vasto tesouro e usou sua riqueza para ajudar sua comunidade.`,
        `${name} nasceu em uma pequena vila e aos ${age} anos, foi treinado para se tornar um(a) ${className}. ${bio} Durante uma batalha épica contra um dragão, ${name} mostrou grande bravura e salvou o reino. Porém, em outra aventura, ${name} se perdeu na floresta encantada e nunca mais foi visto.`,
        `Em uma terra distante, ${name} foi reconhecido como um(a) lendário(a) ${className} aos ${age} anos. ${bio} Em uma de suas jornadas, ${name} encontrou um artefato mágico que lhe concedeu poderes extraordinários. Ele usou esses poderes para trazer paz ao reino, mas acabou sendo consumido pela ambição e se tornou um tirano.`,
        `${name}, um(a) ${className} de ${age} anos, enfrentou muitos desafios. ${bio} Após muitas aventuras, ${name} encontrou o amor de sua vida e se estabeleceu em uma pacata vila, vivendo feliz para sempre. Em outra versão, ${name} foi traído por um amigo próximo e caiu em uma armadilha mortal.`,
        `Aos ${age} anos, ${name} começou sua jornada como ${className}. ${bio} Com determinação e coragem, ${name} uniu diferentes reinos contra um inimigo comum e trouxe uma era de paz. No entanto, em outra versão da história, ${name} foi derrotado em uma batalha crucial e o reino caiu em desespero.`,
        `${name}, um(a) destemido(a) ${className} de ${age} anos, era conhecido por ${bio} Em suas viagens, ${name} encontrou um grupo de aliados leais e juntos realizaram grandes feitos. No entanto, em um destino alternativo, uma traição dentro do grupo levou à sua queda trágica.`,
        `${name} era um(a) ${className} de ${age} anos que escondeu suas verdadeiras intenções. ${bio} Com astúcia e manipulação, ${name} subiu ao poder, eliminando seus adversários. No entanto, um herói se levantou e desmascarou ${name}, levando à sua queda.`,
        `Desde jovem, ${name} sonhava em ser um(a) herói(ína). Aos ${age} anos, como ${className}, ${bio} encontrou a oportunidade perfeita. ${name} derrotou um poderoso vilão e se tornou uma lenda viva, sendo lembrado(a) por gerações.`,
        `Um(a) ${className} de ${age} anos, ${name}, viveu uma vida modesta. ${bio} Quando uma grande ameaça surgiu, ${name} tentou lutar, mas sua fraqueza foi demais. Sem poder fazer nada, ${name} assistiu seu mundo desmoronar.`,
        `${name} era um(a) cruel ${className} de ${age} anos. ${bio} Seu poder e influência cresceram, subjugando reinos inteiros. No entanto, sua ambição desenfreada o(a) levou a um confronto final onde foi finalmente derrotado(a) por uma coalizão de heróis.`,
        `Aos ${age} anos, ${name}, um(a) ambicioso(a) ${className}, encontrou um artefato sombrio. ${bio} Usando seu poder, ${name} governou com mão de ferro até que uma rebelião surgiu, liderada por aqueles que ele(a) oprimiu.`,
        `${name}, um(a) ${className} de ${age} anos, foi treinado(a) para proteger o reino. ${bio} Durante uma invasão, ${name} defendeu bravamente as muralhas, se tornando um(a) herói(ína) eterno(a) na memória de seu povo.`,
        `Um(a) jovem ${className} de ${age} anos, ${name}, foi capturado(a) por forças inimigas. ${bio} Incapaz de se libertar, ${name} foi usado(a) como peão em um jogo de poder, sem jamais ter a chance de mudar seu destino.`,
        `${name} era um(a) ${className} de ${age} anos que sonhava em ser grande. ${bio} Apesar de seus esforços, nunca conseguiu vencer uma batalha, sendo sempre superado(a) por adversários mais fortes.`,
        `Em uma terra cheia de heróis, ${name}, um(a) ${className} de ${age} anos, descobriu um segredo que poderia destruir o mundo. ${bio} Decidiu se sacrificar para proteger a todos, garantindo paz à custa de sua própria vida.`,
        `Aos ${age} anos, ${name} era conhecido(a) como o(a) maior ${className} de todos os tempos. ${bio} Em uma virada do destino, se voltou contra seu próprio povo, mergulhando o reino em uma era de escuridão até ser finalmente derrotado(a).`
    ];
    
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    return randomStory;
}
