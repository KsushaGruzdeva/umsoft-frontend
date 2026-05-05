/* eslint-disable @typescript-eslint/no-unused-expressions */
export const useHeaderMenu = () => {
    const visibleHeaderMenuState = useState('visible-menu', () => false);
    const showHeaderMenu = computed(() => visibleHeaderMenuState.value);
    const setVisibleHeaderMenu = (state: boolean) => {
        visibleHeaderMenuState.value = state;
    };

    return {
        showHeaderMenu,
        setVisibleHeaderMenu
    };
};

export const useModalFormState = () => {
    const modal = useState('use-modal-state', () => ({
        showModalState: false,
        formIdState: '',
        formNameState: '',
    }));

    //properties
    const isDisplayed = computed(() => { return modal.value.showModalState });
    const formId = computed(() => { return modal.value.formIdState });
    const formName = computed(() => { return modal.value.formNameState });

    //methods
    const showModal = (id: string, name: string = '') => {
        useWindowAreaState().hideScrool(true);
        modal.value.formIdState = id ?? '',
        modal.value.formNameState = name;
        modal.value.showModalState = true;
    };

    const hideModal = async () => {
        modal.value.formIdState ='',
        modal.value.formNameState = '';
        await useWindowAreaState().showScrool();
        modal.value.showModalState = false;
    };
    return {
        isDisplayed,
        formId,
        formName,
        showModal,
        hideModal,
    }
};

export const useWindowAreaState = () => {
    /** @var для запоминания места полосы прокрутки, используется при скрытии, для восстановления значения */
    //const scrollY = ref<number>(0) as Ref<number>;
    const scrollY = useState('scrollY', () => 0 ); // используем гидрацию

    const showScrool = async () => {
        //console.log('showScrool:scrollY.value', scrollY.value);
        document.documentElement.style.removeProperty('--scroll-position');
        /* Прокрутка возобновляется */
        document.body.classList.remove('no-scroll');
        await nextTick(() => {
            //const to = scrollY.value.toString();
            //console.log('to:', to);
            window.scrollTo(0, scrollY.value);
            scrollY.value = 0;
        });
    };

    const hideScrool = (saveLastPosition = false) => {
        //console.log('hideScrool:saveLastPosition', saveLastPosition);
        //console.log('scrollY.value start', scrollY.value);
        if (saveLastPosition) {
            scrollY.value =
                window.scrollY || document.documentElement.scrollTop;
        } else {
            scrollY.value = 0;
        }
        //console.log('scrollY.value end', scrollY.value);
        document.documentElement.style.setProperty(
            '--scroll-position',
            `${scrollY.value}px`
        );
        /* Прокрутка ставится на паузу */
        document.body.classList.add('no-scroll');
    };

    return {
        showScrool,
        hideScrool
    };
};

export const usePreloaderState = () => {
    const preloader = useState('preloader-state', () => ({
        show: false
    }));

    const show = () => {
        preloader.value.show = true;
    };
    const hide = () => {
        preloader.value.show = false;
    };

    const status = computed(() => {
        return preloader.value.show;
    });

    return {
        status,
        show,
        hide
    };
};