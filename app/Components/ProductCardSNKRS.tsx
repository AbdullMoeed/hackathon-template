import Image from 'next/image'

function LearnMoreButton() {
  return (
    <button className="bg-black text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 rounded-full hover:bg-black/90 transition-colors">
      Learn More
    </button>
  )
}

interface CardProps {
  title?: string
  subtitle?: string
  image: string
  hasButton?: boolean
  className?: string
}

function Card({ title, subtitle, image, hasButton = false, className = '' }: CardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="relative aspect-square bg-[#f6f6f6]">
        <Image
          src={image}
          alt={title || "Nike product"}
          fill
          className="object-cover"
        />
        {hasButton && (
          <div className="absolute left-4 bottom-4">
            <LearnMoreButton />
          </div>
        )}
      </div>
      {(title || subtitle) && (
        <div className="mt-4 text-center space-y-1">
          {title && <h3 className="text-[13px] sm:text-[15px] leading-tight">{title}</h3>}
          {subtitle && <p className="font-medium text-[15px] sm:text-[17px]">{subtitle}</p>}
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card 
          image="/placeholder.svg?height=500&width=500" 
          hasButton={true}
        />
        <Card
          title="Air Max 1 '86 OG G"
          subtitle="University Red"
          image="/placeholder.svg?height=500&width=500"
        />
        <Card
          title="Air Max 1 '86 Original"
          subtitle="Big Bubble"
          image="/placeholder.svg?height=500&width=500"
        />
        <Card
          title="Women's Air Max 1 '86 Original"
          subtitle="Big Bubble"
          image="/placeholder.svg?height=500&width=500"
        />
        <Card 
          image="/placeholder.svg?height=500&width=500"
          hasButton={true}
        />
        <Card
          title="Air Max 1"
          subtitle="Corduroy"
          image="/placeholder.svg?height=500&width=500"
        />
      </div>
    </main>
  )
}

