@php
	use Illuminate\Support\Str;
	use Carbon\Carbon;
	$changeFromWalletFunc = 'a' . Str::random(6);
	$changeToWalletFunc = 'b' . Str::random(6);
	$currentFromWallet = 'f' . Str::random(6);
	$currentToWallet = 'g' . Str::random(6);
	$formSubmit = 'j' . Str::random(6);
	$formQuantity = 'k' . Str::random(6);
	$wallet_shortcuts = [
	    1 => 'USD',
	    2 => 'EUR',
	    3 => 'GBP',
	];

@endphp
@extends($activeTemplate . 'layouts.sage')
@section('content')
	<div class="not_a_container">
		<div class="row gx-2 mob_gy5">
			<div class="col-lg-9">
				<div class="card trading-view">
					<div class="tab-content pt-50">
						<div class="tab-pane fade show active" id="expert">
							<div class="chart-wrapper">
								<div class="chart">
									<div class="card custom--card h-100">
										<div class="not_card-body">
											<div class="tradingview-widget-container">
												<div class="not_safe" id="expert_chart"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card trading-view mt-2" style="display: flex; min-height: 200px; overflow-x: auto;">
					<div style="flex: 1;">
						<ul class="nav nav-tabs px-2 py-2" id="trx_tabs_" role="tablist" style="display: flex;column-gap: 10px;">
							<li class="nav-item">
								<a class="trx_tab_link" role="tab" aria-selected="true">Exchange Log</a>
							</li>
						</ul>
						<table class="table-borderless table">
							<thead>
								<tr>
									<th scope="col">Id</th>
									<th scope="col">From</th>
									<th scope="col">To</th>
									<th scope="col">Amount</th>
									<th scope="col">Return</th>
									<th scope="col">Charge</th>
									<th scope="col">Date</th>
								</tr>
							</thead>
							<tbody>
								@if ($log->count() < 1)
									<tr>
										<td colspan="7">
											<center>No data, yet.</center>
										</td>
									</tr>
								@endif
								@foreach ($log as $trade)
									<tr>
										<td>{{ $trade->trx }}</td>
										<td>{{ $trade->from_wallet }}</td>
										<td>{{ $trade->to_wallet }}</td>
										<td>{{ number_format($trade->amount, 6) }}</td>
										<td>{{ number_format($trade->rate * $trade->amount, 6) }}</td>
										<td>{{ number_format($trade->charge, 6) }}</td>
										<td>{{ $trade->created_at }} GMT</td>
									</tr>
								@endforeach
							</tbody>
						</table>
						@if ($log->hasPages())
							<div style="display: flex; justify-content: center;">{{ paginateLinks($log) }}</div>
						@endif
					</div>
				</div>
			</div>
			<div class="col-lg-3">
				{{-- <div>
					<div class="card px-1 py-2 text-center align-middle">
						<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
									class="fa fa-solid fa-check"></i></span>From wallet</p>
					</div>
					<div class="row gx-2 mt-1 text-center align-middle">
						@foreach ($wallet_shortcuts as $id => $wallet)
							<div class="col-4" onclick="{{ $changeFromWalletFunc }}({{ $id }})">
								<div class="card wallet_tab @if ($id == 1) active @endif"
									id="from_wallt_ref_{{ $wallet }}">{{ $wallet }}</div>
							</div>
						@endforeach
					</div>
				</div>
				<div>
					<div class="card mt-2 px-1 py-2 text-center align-middle">
						<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
									class="fa fa-solid fa-check"></i></span>To wallet</p>
					</div>
					<div class="row gx-2 mt-1 text-center align-middle">
						@foreach ($wallet_shortcuts as $id => $wallet)
							<div class="col-4" onclick="{{ $changeToWalletFunc }}({{ $id }})">
								<div class="card wallet_tab @if ($id == 2) active @endif"
									id="to_wallt_ref_{{ $wallet }}">{{ $wallet }}</div>
							</div>
						@endforeach
					</div>
				</div>
				<div class="card mt-2 px-1 py-2 text-center align-middle">
					<p style="font-size: 14px;"> <span class="icon_dot mx-1"><i class="fa fa-solid fa-check"></i></span>
						Wallet Balance</p>
					<p id="from_wallt_balance_tx">{{ number_format($balances['USD'], 8) }} USD</p>
					<p id="to_wallt_balance_tx">{{ number_format($balances['EUR'], 8) }} EUR</p>
				</div>
				<div>
					<div class="card mt-2 px-1 py-2 text-center align-middle">
						<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
									class="fa fa-solid fa-check"></i></span>Exchange details</p>
					</div>
					<p class="m-0 mt-1" style="font-size: 14px;"> <span class="icon_dot mx-1"><i class="fa fa-solid fa-check"></i></span>Quantity:</p>
					<div class="mt-2 text-center align-middle">
						<input class="opqty" id="{{ $formQuantity }}" name="{{ $formQuantity }}" type="number" step="any"
							placeholder="Enter quantity">
					</div>
					<div class="mt-2">
						<p class="m-0 mt-1" style="font-size: 14px;">Swiping:</p>
					</div>
					<div class="buy_trx_ctn mt-2 px-5">
						<button class="buy_trx mb-1 mt-2" type="button" style="background-color: green; width:100%;"
							onclick="{{ $formSubmit }}()">Exchange</button>
					</div>
				</div> --}}

				<div>
					<div class="row gx-2 mt-1 text-center align-middle">
						@php
							$balance = (array) $balances;
						@endphp
						<form class="p-1" id="exchangeForm" style="width: 100%;" action="{{ route('user.exchange.achieve') }}"
							method="POST">
							@csrf

							<div class="card mb-2 px-1 py-2 text-center align-middle">
								<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
											class="fa fa-solid fa-check"></i></span>From wallet</p>
							</div>

							<select class="mb-2 p-2 form-select" id="from" name="from" style="width: 100%">
								<option value>Choose a coin</option>
								@foreach ($balance as $key => $value)
									<option value="{{ strtoupper($key) }}">{{ strtoupper($key) }}
										<span style="color: brown"><b>({{ number_format((float) $value, 8, '.', '') }})</b></span>
									</option>
								@endforeach
							</select>

							<div class="card mb-2 px-1 py-2 text-center align-middle">
								<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
											class="fa fa-solid fa-check"></i></span>To wallet</p>
							</div>

							<select class="mb-2 p-2 form-select" id="to" name="to" style="width: 100%">
								<option value>Choose a coin</option>
								@foreach ($balance as $key => $value)
									<option value="{{ strtoupper($key) }}">{{ strtoupper($key) }}
										<span style="color: brown"><b>({{ number_format((float) $value, 8, '.', '') }})</b></span>
									</option>
								@endforeach
							</select>

							<div class="card mb-2 px-1 py-2 text-center align-middle">
								<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2">
								    <i class="fa-solid fa-money-bill"></i></span>Amount</p>
							</div>

							<input class="form-control mb-2" id="amount" name="amount" type="number">

							<button class="btn btn-success text-white w-100" id="exchange-btn">Exchange</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

@push('script')
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
	<script src="/assets/templates/basic/js/easytimer.min.js"></script>
	<script>
		document.addEventListener("DOMContentLoaded", function() {
			document.querySelector("#exchangeForm").addEventListener("submit", function(event) {
				event.preventDefault();
			});

			document.getElementById("exchange-btn").addEventListener("click", function(e) {
				e.preventDefault();

				let from = document.getElementById("from").value;
				let to = document.getElementById("to").value;
				let value = document.getElementById("amount").value;

				$.ajax({
					headers: {
						"X-CSRF-TOKEN": "{{ csrf_token() }}",
					},
					url: "{{ route('user.exchange.achieve') }}",
					method: "POST",
					data: {
						value: value,
						from: from,
						to: to,
					},
					success: function(response) {
						if (response.success) {
							notify('success', response.message || '');
							setTimeout(function() {
								window.location.reload();
							}, 1000);
						} else {
							notify('error', response.errors || '')
						}

					}
				});
			});
		});
	</script>
	<script>
		"use strict";
		new TradingView.widget({
			"width": 980,
			"height": 610,
			"symbol": "USDEUR",
			"interval": "D",
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"enable_publishing": false,
			"hide_side_toolbar": false,
			"allow_symbol_change": true,
			"details": true,
			"show_popup_button": true,
			"popup_width": "1000",
			"popup_height": "650",

			"container_id": "expert_chart"
		});
	</script>
	<script>
		var {{ $currentFromWallet }} = 1;
		var {{ $currentToWallet }} = 2;
		const wallets = [
			'USD',
			'EUR',
			'GBP',
		];
		const balances = [
			@foreach ($wallet_shortcuts as $id => $wallet)
				'{{ number_format($balances[$wallet], 8) }}',
			@endforeach
		];
		const balances_val = [
			@foreach ($wallet_shortcuts as $id => $wallet)
				{{ $balances[$wallet] }},
			@endforeach
		];

		function {{ $formSubmit }}() {
			if (document.getElementById('{{ $formQuantity }}').value == null) {
				notify('error', 'Invalid amount.');
				return false;
			} else {
				if (balances_val[{{ $currentFromWallet }} - 1] >= document.getElementById('{{ $formQuantity }}').value) {
					$.ajax({
						headers: {
							"X-CSRF-TOKEN": "{{ csrf_token() }}",
						},
						url: "{{ route('user.exchange.achieve') }}",
						method: "POST",
						data: {
							value: document.getElementById('{{ $formQuantity }}').value,
							from: {{ $currentFromWallet }},
							to: {{ $currentToWallet }},
						},
						success: function(response) {
							if (response.success) {
								notify('success', response.message || '');
							} else {
								notify('error', response.errors || '')
							}
							setTimeout(function() {
								window.location.reload();
							}, 1000);
						}
					});
				} else {
					notify('error', 'Your current ' + wallets[{{ $currentFromWallet }} - 1] +
						' balance is not enough for this exchange.')
				}
			}
		}

		function {{ $changeFromWalletFunc }}(change) {
			if (change >= 1 && change <= 3) {
				if (change == {{ $currentToWallet }}) {
					notify('error', 'You can\'t exchange a coin with itself.');
					return;
				}
				new TradingView.widget({
					"width": 980,
					"height": 610,
					"symbol": wallets[change - 1] + wallets[{{ $currentToWallet }} - 1],
					"interval": "D",
					"timezone": "Etc/UTC",
					"theme": "dark",
					"style": "1",
					"locale": "en",
					"enable_publishing": false,
					"hide_side_toolbar": false,
					"allow_symbol_change": true,
					"details": true,
					"show_popup_button": true,
					"popup_width": "1000",
					"popup_height": "650",
					"container_id": "expert_chart"
				});
				document.getElementById('from_wallt_ref_' + wallets[{{ $currentFromWallet }} - 1]).classList.remove(
					'active');
				document.getElementById('from_wallt_ref_' + wallets[change - 1]).classList.add('active');
				document.getElementById('from_wallt_balance_tx').innerText = balances[change - 1] + ' ' + wallets[
					change - 1];
				{{ $currentFromWallet }} = change;
			}
		}

		function {{ $changeToWalletFunc }}(change) {
			if (change >= 1 && change <= 3) {
				if (change == {{ $currentFromWallet }}) {
					notify('error', 'You can\'t exchange a coin with itself.');
					return;
				}
				new TradingView.widget({
					"width": 980,
					"height": 610,
					"symbol": wallets[{{ $currentFromWallet }} - 1] + wallets[change - 1],
					"interval": "D",
					"timezone": "Etc/UTC",
					"theme": "dark",
					"style": "1",
					"locale": "en",
					"enable_publishing": false,
					"hide_side_toolbar": false,
					"allow_symbol_change": true,
					"details": true,
					"show_popup_button": true,
					"popup_width": "1000",
					"popup_height": "650",
					"container_id": "expert_chart"
				});
				document.getElementById('to_wallt_ref_' + wallets[{{ $currentToWallet }} - 1]).classList.remove('active');
				document.getElementById('to_wallt_ref_' + wallets[change - 1]).classList.add('active');
				document.getElementById('to_wallt_balance_tx').innerText = balances[change - 1] + ' ' + wallets[
					change - 1];
				{{ $currentToWallet }} = change;
			}
		}
	</script>
@endpush
