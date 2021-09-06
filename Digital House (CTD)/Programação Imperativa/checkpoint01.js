console.log("Digite: \n1 - para pipoca\n2 - para macarrão\n3 - para carne\n4 - para feijão\n5 - brigadeiro\n")
function microondas(alimento, tempo){
    let t_pipoca = 10
    let t_macarrao = 8
    let t_carne = 15
    let t_feijao = 12
    let t_brigadeiro = 8 
    switch(alimento){
        case 1:
            console.log("Selecionado: pipoca")
            if(tempo < t_pipoca){
                console.log("Bota mais tempo nisso aí rapá")
            } else if(tempo > t_pipoca*2 && tempo < t_pipoca*3){
                console.log("Xii rapaz, queimou ó")
            } else if(tempo > t_pipoca*3){
                console.log("Ih alá, explodiu")
            } else
                console.log("Prato Pronto")
                break
        case 2:
            console.log("Selecionado: macarrão")
            if(tempo < t_macarrao){
                console.log("Bota mais tempo nisso aí rapá")
            } else if(tempo > t_macarrao*2 && tempo < t_macarrao*3){
                console.log("Xii rapaz, queimou ó")
            } else if(tempo > t_macarrao*3){
                console.log("Ih alá, explodiu")
            } else
                console.log("Prato Pronto")
                break
        case 3:
            console.log("Selecionado: carne")
            if(tempo < t_carne){
                console.log("Bota mais tempo nisso aí rapá")
            } else if(tempo > t_carne*2 && tempo < t_carne*3){
                console.log("Xii rapaz, queimou ó")
            } else if(tempo > t_carne*3){
                console.log("Ih alá, explodiu")
            } else
                console.log("Prato Pronto")
                break
        case 4:
            console.log("Selecionado: feijão")
            if(tempo < t_feijao){
                console.log("Bota mais tempo nisso aí rapá")
            } else if(tempo > t_feijao*2 && tempo < t_feijao*3){
                console.log("Xii rapaz, queimou ó")
            } else if(tempo > t_feijao*3){
            console.log("Ih alá, explodiu")
            } else
                console.log("Prato Pronto")
                break
        case 5:
            console.log("Selecionado: brigadeiro")
            if(tempo < t_brigadeiro){
                console.log("Bota mais tempo nisso aí rapá")
            } else if(tempo > t_brigadeiro*2 && tempo < t_brigadeiro*3){
                console.log("Xii rapaz, queimou ó")
            } else if(tempo > t_brigadeiro*3){
                console.log("Ih alá, explodiu")
            } else
                console.log("Prato Pronto")
                break
        default: 
            console.log("Prato inexistente")
    }
}

microondas(3,20)