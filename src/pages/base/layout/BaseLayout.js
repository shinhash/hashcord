import BaseLayoutTop from "./BaseLayoutTop";
import BaseLayoutContent from "./BaseLayoutContent";
import BaseLayoutBottom from "./BaseLayoutBottom";

const BaseLayout = ({children}) => {
    return (
        <div>
            <BaseLayoutTop />
            <BaseLayoutContent>
                {children}
            </BaseLayoutContent>
            <BaseLayoutBottom />
        </div>
    );
    // return children;
}

export default BaseLayout;