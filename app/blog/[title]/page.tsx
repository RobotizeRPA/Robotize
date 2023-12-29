
import { Metadata } from 'next'
import { getBlogNote } from '../service/blog.service'


type Props = {
    params: { title: string,seccion: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
      const dataTitle = await getBlogNote(params.title,'rpa')
      return {
          title: dataTitle.title,
        }
  }

export default function BlogNote() {
    return <div>Hola</div>
}