import AssetsTable from '../components/AssetTable';
import PriceBar from '../components/PriceBar';
import DownloadLinks from '../components/DownloadLink';

export default function StocksPage() {
  return (
    <div>
      <PriceBar />
      <DownloadLinks/>
      <AssetsTable assetClass="stock" />
    </div>
  );
}
