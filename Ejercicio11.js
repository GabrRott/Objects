class Estudiante{
    #nombre;
    #asignaturas
    constructor(nombre,asignaturas,) {
        this.#nombre=nombre;
        this.#asignaturas=asignaturas;        
    }
    obtenDatos(){
        return `Nombre: ${this.#nombre} \nAsignaturas: ${this.#asignaturas}`;
    }
    
}


const student = new Estudiante("Gabriel",["Javascript","HTML","CSS"])


console.log(student.obtenDatos());