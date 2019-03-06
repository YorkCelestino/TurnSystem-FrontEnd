export interface User {
    Id_Usuario?: any;
    nombre?: string;
    apellido?: string;
    cedula?: any;
    usuarios ?: string;
    password?: string;
    nombreDepartamento?: string;
    estado?: string;
}

export interface UserSave {
    Id_Usuario?: any;
    nombre?: string;
    apellido?: string;
    cedula?: any;
    usuarios ?: string;
    password?: string;
    id_departamento?: any;
    estado?: string;
}

export interface Listdepartment {
    Id_departamento?: any;
    nombreDepartamento?: string;
}
