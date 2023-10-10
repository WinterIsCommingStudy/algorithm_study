function getTime(start, end) {
    const [startH, startM] = start.split(':')
    const [endH, endM] = end.split(':')
    
    const startInMinutes = Number(startH*60) + Number(startM);
    const endInMinutes = Number(endH*60) + Number(endM);
    
    let time = endInMinutes - startInMinutes
    
    if (time < 0) {
        time += 24 * 60;
    }
    
    return time;
}

// A, C, D, F, G 뒤에 #이 오면 한 묶음으로 보기 => 각각 H I J K L 로 치환
function solution(m, musicinfos) {
    const replaceM = m.replace(/A#/g, 'H').replace(/C#/g, 'I').replace(/D#/g, 'J').replace(/F#/g, 'K').replace(/G#/g, 'L')
    const musicinfosObj = {} 
    
    for(let i =0; i < musicinfos.length; i++) {
        const [start, end, title, melody] = musicinfos[i].split(',')
        const replaceMelody = melody.replace(/A#/g, 'H').replace(/C#/g, 'I').replace(/D#/g, 'J').replace(/F#/g, 'K').replace(/G#/g, 'L')
        
        const time = getTime(start, end)
        
        let count = 0;
        let fullMelody = '';
        
        for(let index = 0;  count < time; index++) {
            // 시간만큼 replaceMelody 반복하기
            if(replaceMelody.length <= index) {
                // replaceMelody 길이보다 시간이 길 때 replaceMelody 의 0번 인덱스를 다시 참조해야하므로
                index = 0;
            }
            fullMelody += replaceMelody[index]
            count++;
        }
        
        // 포함되는것들만 객체에 담기
        
        let isIncludes = fullMelody.includes(replaceM)
        
        if(isIncludes) {
            // 키(fullMelody)가 같아도 등록되어야함 =>  비교해서 title이 더 긴걸로 등록
            musicinfosObj[fullMelody] = title       
        }
    }
    
    if(Object.keys(musicinfosObj).length > 1) {
        let maxLengthTilte = '';
        
        for(const music in musicinfosObj) {
            
            if(music.length > maxLengthTilte.length) {
                maxLengthTilte = music;
            }
        }
        return musicinfosObj[maxLengthTilte]
    } else if(Object.keys(musicinfosObj).length === 1) {
        return Object.values(musicinfosObj).toString()
    } else {
        return "(None)"
    }
}
