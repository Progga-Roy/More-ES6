const users = [{ name: 'Akhok Kumar', profession: 'Doctor', age: 68, chamber: 'Epic-Health-Center' }]
// console.log(users[0].chamber);


const data = {
    count: 5000,
    data: [
        { id: 1, name: 'abul', job: 'leader' },
        { id: 2, name: 'abul', job: 'leader' }

    ]
}
// console.log(data.data[1].id)

const user = {

    id: 4001,
    name: 'Thomas Alba Edison',
    address: {
        street: '35/A kochukhet lane',
        postOffice: 'Cantonment',
        city: 'Dhaka'

    },

    profession: 'Post Master',

    details: {
        name: 'Lub-Dub', age: 'Kola Bagan', address: [
            {
                no: 1, road: '22/b', street: 'Molla Para', tower: 'Niribili', rickshaw:
                 { id: 3, name: 'new-rickshaw', rickshaw_puller: 'young' }
            },
            { no: 2, road: '22/b', street: 'Molla Para', tower: 'Niribili' }
        ]
    }

}

// console.log(user.details);
// console.log(user.details.address.tower);
// console.log(user.details?.addres[0]?.rickshaw.name)
// console.log(user.details.address[0].rickshaw.name)
