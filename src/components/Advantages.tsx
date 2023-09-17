import * as React from 'react'
import { ReactComponent as SmallLeafsTop } from '../icons/small_leafs.svg'

const text = [
  {
    title: 'Individuelle Betreuung:',
    text: 'Wir gehen auf die Bedürfnisse jedes einzelnen Kindes ein.'
  },
  {
    title: 'Familiäre Atmosphäre:',
    text: 'Kinder fühlen sich bei uns sicher und geborgen.'
  },
  {
    title: 'Flexibilität:',
    text: 'Unsere Betreuungszeiten kommen Deinen individuellen Bedürfnissen entgegen.'
  },
  {
    title: 'Konitnuität:',
    text: 'Sicherheit und Vertrauen für Dein Kind, da wir konstante Bezugspersonen über einen längeren Zeitraum hinweg sind.'
  },
  {
    title: 'Kleine Gruppengröße:',
    text: 'Wir haben eine ruhige und weniger überfordernde Umgebung.'
  },
  {
    title: 'Individuelle Förderung:',
    text: 'Wir erkennen besser und fördern gezielter individuelle Fähigkeiten.'
  },
  {
    title: 'Persönliche Beziehung:',
    text: 'Wir pflegen eine enge und persönliche Beziehung zu Deinem Kind.'
  }
]

const Advantages: React.FC = () => {
  return (
    <>
      <section className="col-start-2 col-end-4 grid md:grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] gap-6">
        {text.map((item, index) => {
          return (
            <div key={index}>
              <SmallLeafsTop className="mx-auto mb-1 w-12 h-12 text-battleship-gray-400" />
              <div className="px-6 py-8 text-xl text-center bg-whiskey-200 rounded-3xl">
                <h3>{item.title}</h3>
                <p className="mt-2">
                  <strong>{item.text}</strong>
                </p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Advantages
