import PacakageDetailBookData from './PacakageDetailBookData'


export default function PacakageDetailBookGallery() {


    return (
        <div>
            <div class="card" style={{width: "18rem"}}>
                <img src={PacakageDetailBookData.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text">{PacakageDetailBookData.Overview} </p>
                </div>
                <ul class="list-group list-group-flush">Iternary
                    <li class="list-group-item">{PacakageDetailBookData.Iternary}</li>
                    <li class="list-group-item">{PacakageDetailBookData.Iternary}</li>
                    <li class="list-group-item">{PacakageDetailBookData.Iternary}</li>
                    <li class="list-group-item">{PacakageDetailBookData.Iternary}</li>
                </ul>
                <div class="card-body">
                    <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Inclusion</button>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Exclusion</button>
                    </p>
                    <div class="row">
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample1">
                                <div class="card card-body">
                                    {PacakageDetailBookData.Inclusion}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="collapse multi-collapse" id="multiCollapseExample2">
                                <div class="card card-body">
                                    {PacakageDetailBookData.Exclusion}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}