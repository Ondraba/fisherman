export type Order = {
    id: string;
    name: string;
    surname: string;
    info?: string;
    date: string;
    count: number;
    order: number;
    detail?: Detail;
    status: string;
};

export type Detail = {
    value: number;
    item: string;
    flags?: {
        flagA: string;
        flagB: string;
    };
};

export type DatabaseConnectionArgs = {
    userName: string;
    password: string;
    index: number;
};

const mockDatabaseData: Order[] = [
    {
        id: '5c94bfb4ed0764f18cbfbe45',
        name: 'Ondrej',
        surname: 'Basista',
        info: 'some added info',
        date: '20.02.2018',
        count: 99,
        order: 1,
        status: 'open',
        detail: {
            value: 55,
            item: 'some item',
            flags: {
                flagA: 'A',
                flagB: 'B',
            },
        },
    },
    {
        id: '5c94bfb4ed0c94bfb4ed0',
        name: 'John',
        surname: 'Doe',
        date: '15.03.2017',
        count: 11,
        order: 2,
        status: 'open',
    },
    {
        id: '764f18cbfbe45764f18cbfbe46',
        name: 'Katy',
        surname: 'Perry',
        info: 'some added info etc..',
        date: '20.01.2019',
        count: 100,
        order: 3,
        status: 'open',
        detail: {
            value: 66,
            item: 'some item with value 66',
            flags: {
                flagA: 'A',
                flagB: 'B',
            },
        },
    },
];

const databaseCredentials = {
    userName: 'admin',
    password: 'password',
};

export const database = (args: DatabaseConnectionArgs) => {
    if (args.userName !== databaseCredentials.userName && args.password !== databaseCredentials.password) {
        return undefined;
    }
    return {
        getData: async () => await mockDatabaseData[args.index],
    };
};
