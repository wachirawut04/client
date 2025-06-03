import AssetsTable from '../components/AssetTable';
import DownloadLinks from '../components/DownloadLink';
import PriceBar from '../components/PriceBar';

export default function CommoditiesPage() {
  return (
    <div>
      <PriceBar />
      <DownloadLinks/>
      <AssetsTable assetClass="commodity" />
    </div>
  );
}
