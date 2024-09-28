export const dataState = {
    pages: [
        {
        heading: 'цикл while',
        about: 'цикл while имеет следующий синтаксис'
    },
        {
        heading: 'цикл for',
        about: 'цикл for имеет следующий синтаксис'
    },
        {
        heading: 'конструкция \'switch\'',
        about: 'конструкция switch имеет следующий синтаксис'
    },
    ]
}

export  type dataStateType = {
    pages: Array<PageType>
}
export  type PageType = {
    heading: string,
    about: string,
}