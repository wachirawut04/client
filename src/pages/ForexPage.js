import AssetsTable from '../components/AssetTable';
import DownloadLinks from '../components/DownloadLink';
import PriceBar from '../components/PriceBar';

export default function ForexPage() {
  return (
    <div>
      <PriceBar /> 
      <DownloadLinks/>
      <AssetsTable assetClass="forex" />
    </div>
  );
}
