import { useState, useEffect, useContext, useRef } from "react";

import { DispatchContext, SettingsContext } from "context/SettingsContext";

import { DialogContent, DialogTitle, DialogTop } from "components/CustomDialog";
import Button from "@material-ui/core/Button";

import dragonAni from "data/aniDragon";
import enemyAni from "data/aniEnemies";
import Modal from "../../Modal";

import { chainCodeToList } from "helpers/viewerHelpers";
import { getViewerType } from "helpers/helpers";

import "./styles/NonHumanAni.css";

function NonHumanAni({ close, handleSelect, docked, moveToDock }) {
    const dispatch = useContext(DispatchContext);
    const {
        model: { id: modelId },
        app: { sidebarContent },
    } = useContext(SettingsContext);

    const [sourceId, setSourceId] = useState(modelId);
    const [modalMode, setModalMode] = useState("");

    const source = useRef(modelId);

    useEffect(() => {
        const viewerType = getViewerType(modelId);
        if (!["dragon", "ani"].includes(viewerType)) {
            close();
            return;
        }
        if (modelId !== source.current) {
            source.current = modelId;
            setSourceId(modelId);
        }
    }, [modelId, close]);

    const portraitDir = sourceId.startsWith("h")
        ? "enemyPortraits"
        : "dragonPortraits";

    const portraitName = sourceId.startsWith("h")
        ? sourceId
        : sourceId.slice?.(1);

    const portraitPath = `${process.env.PUBLIC_URL}/img/${portraitDir}/${portraitName}.png`;

    const portrait = <img src={portraitPath} alt="portrait" />;

    const chainMode = sidebarContent === "chainMaker";

    const animations = sourceId.startsWith("h")
        ? enemyAni[sourceId]
        : dragonAni[sourceId];

    const chooseSource = () => setModalMode("dragon");
    const closeModal = () => setModalMode("");

    const updateSettings = (key, value) => {
        dispatch({ type: "update", key, value });
    };

    const defaultAniHandler = (aniCode, name) => {
        // Set Animation
        updateSettings("animation", { code: aniCode });
        // Reinitialize Chain Maker's chain
        const chainList = chainCodeToList(aniCode, name);
        updateSettings("chainMaker", { chain: chainList });
    };

    const aniHandler = handleSelect || defaultAniHandler;

    const handleAniSelect = event => {
        const aniCode = event.currentTarget.dataset.value;
        const name = event.currentTarget.dataset.name;

        aniHandler(aniCode, name);
        !docked && close();
    };

    const aniButtons = animations ? (
        animations.map(({ name, code }) => (
            <Button
                key={code}
                data-value={code}
                data-name={name}
                variant="contained"
                onClick={handleAniSelect}
            >
                {name}
            </Button>
        ))
    ) : (
        <div>No Animation</div>
    );

    return (
        <>
            <DialogTop>
                <DialogTitle
                    showDockBtn={!docked && !chainMode}
                    onDock={moveToDock}
                    onClose={close}
                >
                    {chainMode ? "Add Animation" : "Select an Animation"}
                </DialogTitle>
                <div className="NonHumanAni-source">
                    {portrait}
                    <Button variant="outlined" onClick={chooseSource}>
                        Change Source
                    </Button>
                </div>
            </DialogTop>
            <DialogContent dividers className="NonHumanAni-content">
                {aniButtons}
            </DialogContent>
            <Modal
                mode={modalMode}
                closeModal={closeModal}
                handleSelect={setSourceId}
            />
        </>
    );
}

export default NonHumanAni;
