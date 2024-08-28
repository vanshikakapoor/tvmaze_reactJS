import './Filter.css'
export default function Filter({ onSortChange }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedSortOption = Number(e.target.sort.value);
        console.log('Filter form submitted with sort option:', selectedSortOption); // Debugging
        onSortChange(selectedSortOption);
    };

    return (
    <div>
        <div className='Header_filler'></div>
        <form  onSubmit={handleSubmit}>
        <label class="control-label" for="network-country_enum">Country</label>
        <div className="select-container"> 
            <select id="network-country_enum" class="form-control" name="Network[country_enum]"
            onChange={(e) => {
            console.log('Sort option changed to:', e.target.value); // Debugging
            onSortChange(Number(e.target.value));
            }}
             >
                <option value=""></option>
                <option value="1">Afghanistan</option>
                <option value="3">Albania</option>
                <option value="4">Algeria</option>
                <option value="11">Argentina</option>
                <option value="12">Armenia</option>
                <option value="14">Australia</option>
                <option value="15">Austria</option>
                <option value="16">Azerbaijan</option>
                <option value="19">Bangladesh</option>
                <option value="21">Belarus</option>
                <option value="22">Belgium</option>
                <option value="27">Bolivia, Plurinational State of</option>
                <option value="29">Bosnia and Herzegovina</option>
                <option value="32">Brazil</option>
                <option value="35">Bulgaria</option>
                <option value="40">Canada</option>
                <option value="45">Chile</option>
                <option value="46">China</option>
                <option value="49">Colombia</option>
                <option value="56">Croatia</option>
                <option value="59">Cyprus</option>
                <option value="60">Czech Republic</option>
                <option value="61">Denmark</option>
                <option value="66">Egypt</option>
                <option value="70">Estonia</option>
                <option value="73">Faroe Islands</option>
                <option value="75">Finland</option>
                <option value="76">France</option>
                <option value="78">French Polynesia</option>
                <option value="82">Georgia</option>
                <option value="83">Germany</option>
                <option value="86">Greece</option>
                <option value="100">Hong Kong</option>
                <option value="101">Hungary</option>
                <option value="102">Iceland</option>
                <option value="103">India</option>
                <option value="104">Indonesia</option>
                <option value="105">Iran, Islamic Republic of</option>
                <option value="106">Iraq</option>
                <option value="107">Ireland</option>
                <option value="109">Israel</option>
                <option value="110">Italy</option>
                <option value="112">Japan</option>
                <option value="115">Kazakhstan</option>
                <option value="118">Korea, Democratic People&#039;s Republic of</option>
                <option value="119">Korea, Republic of</option>
                <option value="123">Latvia</option>
                <option value="124">Lebanon</option>
                <option value="129">Lithuania</option>
                <option value="130">Luxembourg</option>
                <option value="135">Malaysia</option>
                <option value="136">Maldives</option>
                <option value="144">Mexico</option>
                <option value="146">Moldova, Republic of</option>
                <option value="148">Mongolia</option>
                <option value="157">Netherlands</option>
                <option value="159">New Zealand</option>
                <option value="162">Nigeria</option>
                <option value="166">Norway</option>
                <option value="169">Pakistan</option>
                <option value="174">Peru</option>
                <option value="175">Philippines</option>
                <option value="177">Poland</option>
                <option value="178">Portugal</option>
                <option value="179">Puerto Rico</option>
                <option value="180">Qatar</option>
                <option value="182">Romania</option>
                <option value="183">Russian Federation</option>
                <option value="195">Saudi Arabia</option>
                <option value="197">Serbia</option>
                <option value="200">Singapore</option>
                <option value="202">Slovakia</option>
                <option value="203">Slovenia</option>
                <option value="206">South Africa</option>
                <option value="208">Spain</option>
                <option value="209">Sri Lanka</option>
                <option value="214">Sweden</option>
                <option value="215">Switzerland</option>
                <option value="217">Taiwan, Province of China</option>
                <option value="220">Thailand</option>
                <option value="225">Trinidad and Tobago</option>
                <option value="226">Tunisia</option>
                <option value="227">Turkey</option>
                <option value="232">Ukraine</option>
                <option value="233">United Arab Emirates</option>
                <option value="234">United Kingdom</option>
                <option value="235">United States</option>
                <option value="238">Uzbekistan</option>
                <option value="239">Vanuatu</option>
                <option value="240">Venezuela, Bolivarian Republic of</option>
                <option value="241">Viet Nam</option>
            </select>
            </div>
            <div class="help-block"></div>
            <div class="form-group field-network-sort">
            <label class="control-label" for="network-sort">Sort by</label>
            <div className="select-container">
            <select id="network-sort" class="form-control" name="sort">
                <option value="1" selected>Most popular</option>
                    <option value="2">Least popular</option>
                    <option value="3">A to Z</option>
                    <option value="4">Z to A</option>
            </select>
            </div>

<div class="help-block"></div>
</div>
<div class="form-group">
    <button type="submit" class="filter_submit_button">Filter</button></div>

</form>
    </div>);
}