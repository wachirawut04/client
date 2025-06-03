import { useParams } from 'react-router-dom';
import AssetsTable from './AssetTable';

export default function SearchResultsPage() {
  const { symbol } = useParams();

  return (
    <AssetsTable assetClass={`symbol?symbol=${symbol}`} />
  );
}
