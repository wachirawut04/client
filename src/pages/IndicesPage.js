import AssetsTable from '../components/AssetTable';
import PriceBar from '../components/PriceBar';
import DownloadLinks from '../components/DownloadLink';

export default function IndicesPage() {
  return (
    <div>
      <PriceBar />
      <DownloadLinks/>
      <AssetsTable assetClass="index" />
    </div>
  );
}
