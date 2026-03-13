import DestinationDetails from "./DestinationDetails"

interface Props {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: Props) {
  const { id } = await params
  return <DestinationDetails id={id} />
}