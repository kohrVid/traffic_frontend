import { DateInput } from '@/components/FormFields';
import { WorldMap } from '@/components/WorldMap';

export default function Home() {
  return (
    <>
      <h1>Page Traffic</h1>
      <DateInput name="from" />
      <DateInput name="to" />
      <WorldMap />
    </>
  );
}
