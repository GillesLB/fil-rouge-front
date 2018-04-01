
export interface Admin {
    login: string;
    password: string;
}

export interface Case {
    id?: number;
    date: string;
    name: string;
    description: string;
    listComment: Comment[];
    listUser: User[];
    listPhoto: Photo[];
    pieceOfEvidence: PieceOfEvidence[];
    listVictim: People[];
    listSuspect: People[];
    listWitness: People[];
    weapon: Weapon[];
    vehicule: Vehicule[];
    listTag: Tag[];
}

export interface Comment {
    id?: number;
    date: string;
    text: string;
    user: User;
}

export interface Message {
    id?: number;
    date: string;
    description: string;
    user: User;
}

export interface People {
    id?: number;
    date: string;
    firstName: string;
    lastName: string;
    nickName: string;
    adress: string;
    photo: Photo;
    adn: string;
    fingerPrint: Photo;
    tatoo: string;
    skinColor: string;
    eyeColor: string;
    hairColor: string;
    hairStyle: string;
    size: number;
    weight: number;
    description: string;
    listComment: Comment;
    listCase: Case [];
    listTag: Tag[];
    listPeopleLink: People[];
}

export interface Photo {
    id?: number;
    date: string;
    name: string;
    description: string;
    listComment: Comment[];
    url: string;
    listCase: Case[];
    listTag: Tag[];
}

export interface PieceOfEvidence {
    id?: number;
    createDate: Date;
    updateDate: Date;
    type: string;
    serialNumber: string;
    // description: string;
    // listComment: Comment[];
    // listPhoto: Photo[];
    // listCase: Case [];
    // listTag: Tag[];
}

export interface Role {
    name: string;
}

export interface Tag {
    name: string;
}

export interface User {
    firstName: string;
    lastName: string;
    login: string;
    password: string;
    photo: Photo;
}

export interface Vehicule {
    id?: number;
    marque: string;
    model: string;
    color: string;
    licensePlate: string;
    createDate: Date;
    updateDate: Date;
    listCase: Case [];
}

export interface Weapon {
    id?: number;
    type: string;
    modele: string;
    createDate: string;
    updateDate: string;
}
