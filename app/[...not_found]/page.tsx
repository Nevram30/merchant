import { redirect, notFound } from 'next/navigation';

export default function NotFound(props: any) {
  if (
    !Array.isArray(props.params.not_found) ||
    !props.params.not_found.includes('404')
  ) {
    return redirect('/404');
  } else {
    notFound();
  }
}
