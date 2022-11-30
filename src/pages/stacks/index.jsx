import { ContainerStack } from '../../components/html/stackContainer'

const stacks = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'Python',
  'NodeJS',
  'React',
  'React Native',
  'Prisma',
  'SQLite',
]

export const Stacks = () => {
  return (
    <section
      className="bg-grip-particle bg-right bg-no-repeat  bg-fixed shadow-2xl  h-screen snap-start fade_class_header"
      id="stacks"
    >
      <main className="transition-all lg:container lg:mx-auto  min-h-[90vh]  items-center  flex flex-col lg:flex-row fade_class">
        <div className="w-1/2  gap-5 text-center flex flex-col justify-center lg:text-start lg:pl-9">
          {/* <div className=" flex items-center justify-center h-12 lg:justify-start lg:w-1/2">
            <div className="rounded-xl h-1/2 px-3 bg-radind  text-center">
              <h4 className=" text-black text-shadow-lg">Stacks</h4>
            </div>
          </div> */}
          <div className=" flex items-center justify-center  h-16 lg:justify-start lg:w-1/2">
            <div className="rounded-xl  px-3 py-2 bg-radind  text-center">
              <h4 className=" text-black text-xl text-shadow-lg">Stacks</h4>
            </div>
          </div>

          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-shadow-xl">
              Algumas das stacks que tenho conhecimento
            </h1>
            <h2 className="text-2xl lg:text-3xl">ou que já usei.</h2>
          </div>
        </div>

        <div className="flex-1 flex items-center  gap-3 flex-wrap">
          {stacks.map((stack) => (
            <ContainerStack body={stack} />
          ))}
        </div>
      </main>
    </section>
  )
}
