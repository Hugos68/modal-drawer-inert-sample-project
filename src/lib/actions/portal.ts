type PortalSettings = {
    target: HTMLElement
}

export function portal(node: HTMLElement, { target }: PortalSettings) {
    node.remove();
    target.appendChild(node);

    return {
        destroy() {
            node.remove();
        }
    }
}