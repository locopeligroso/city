import globalMaterials from "../globalMaterials";
import Floor from "../Floor";
import DNASpiral from "./DNASpiral";
import { SingleBuilding } from "../CentralPlaza/Arc";

export default function Start() {

    return <>

        <DNASpiral
            position={[0, 0, 0]}
            count={55}
            spiralControl={0.05}
            length={2}
        />

        <SingleBuilding
            position={[-5 + 1.3 + 0.8, 0, 1.3 / 2]}
            rotation={[0, Math.PI * 0.5, 0]}
            buildingSequence={[1, 2, 3, 1, 1, 3, 2, 1]}
            innerMaterial={globalMaterials.emissiveBlueMat}
            outerMaterial={globalMaterials.metallic.black}
            baseMaterial={globalMaterials.metallic.orange}
        />

        <Floor material={globalMaterials.metallic.red} />

    </>
}