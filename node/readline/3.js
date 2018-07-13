const readline = require('readline')

const completer = (line) => {
    const command = 'npm'
    const subCommands = ['help','init','install']

    if(line.length <= command.length) {
        return [command.indexOf(line) === 0 ? [command] : [], line]
    }

    let hits = subCommands.filter(function(subCommand){ 
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf( lineTrippedCommand ) === 0;
    })

    if(hits.length === 1){
        hits = hits.map(function(hit){
            return [command, hit].join(' ');
        });
    }

    return [hits.length ? hits : subCommands, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer: completer
})

rl.prompt()