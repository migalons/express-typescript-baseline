import catalog from '../../data/catalog.json'

export const getCatalog = (id: string):any => {
    return (<any>catalog)[id];
};
