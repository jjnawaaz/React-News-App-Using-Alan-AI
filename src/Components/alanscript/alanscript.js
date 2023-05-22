intent('Get the News from $(item* (.*)) Category', (p) => {
    if(p.item.value === 'health' || p.item.value === 'general' || p.item.value === 'business' || p.item.value === 'sports'){
        p.play({ command : 'VoiceNews', data: p.item.value});
        p.play(`Fetching News on ${p.item.value} Category`);
    }
    else {
        p.play(`Cannot get data`)
    }
    
});


