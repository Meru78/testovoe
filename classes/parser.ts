import fs from "fs"

class Parser {
    parseFile(){
        let fileData: any = fs.readFileSync('../basic.txt').toString()

        fileData = fileData.split('/n')
        fileData = fileData.map((el: string)=>el.split(':'))
        
    }
}

export default Parser