import { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'f6197b4a-8ab1-4307-afc0-ebdb7b7020cb',
      title: 'Unit Summit',
      slug: 'unit-slug',
      details: 'Um evento para devs apaixonadas por código',
      maximumAttendees: 120
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})