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
    id_Departamento?: any;
    estado?: string;
    role?: any;
}

export interface Listdepartment {
    id_Departamento?: any;
    nombreDepartamento?: string;
}
