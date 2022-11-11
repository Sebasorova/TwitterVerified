body.onload = tweemojiparser() {    
            twemoji.parse(document.body, 
                    {folder: 'svg', ext: '.svg'}
            );
}
