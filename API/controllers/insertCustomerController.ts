import { config } from "../config";

var sql = require("mssql");

async function uspInsertCustomer(Cedula: string, NombreCompleto: string, Email: string, Direccion: string,
                                Observaciones: string, Telefono1: string, NotasTelefono1: string,
                                Telefono2: string, NotasTelefono2: string) {
    
    try{
        // Establish connection
        await sql.connect(config);

        // Creates Request object
        var request = new sql.Request();

        // String Query
        let strQuery = 'EXEC uspInsertCustomer ';
        strQuery += Cedula + ', \'' + NombreCompleto + '\', \'' + Email + '\', \'' + Direccion + '\', \'' + Observaciones + '\', ' +
                    Telefono1 + ', \'' + NotasTelefono1 + '\', ' + Telefono2 + ', \'' + NotasTelefono2 + '\';';

        // console.log(strQuery);

        // Executes string query
        await request.query(strQuery);

        console.log("Insertion successfully: Customer\n");

    }catch(error){
        console.log(error);
    };
}

export{uspInsertCustomer}